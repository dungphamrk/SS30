import React, { useState, useEffect } from "react";

interface Work {
  work: string;
  status: string;
}
let isChecked = 0;

const BT11: React.FC = () => {
  const [workList, setWorkList] = useState<Work[]>([]);

  useEffect(() => {
    const storedWorks = JSON.parse(
      localStorage.getItem("works") || "[]"
    ) as Work[];
    setWorkList(storedWorks);
  }, []);

  const calculateProgress = () => {
    const completedCount = workList.filter(
      (work) => work.status === "checked"
    ).length;
    const totalCount = workList.length;
    if (totalCount === 0) return 0;
    return (
      <span>
        {" "}
        {completedCount} / {totalCount}
      </span>
    );
  };

  const addWork = () => {
    const input = (document.getElementById("newWorkInput") as HTMLInputElement)
      .value;
    if (input === "") {
      alert("Tên công việc không được để trống");
      return;
    }
    const newWork: Work = {
      work: input,
      status: "label",
    };
    const updatedList = [...workList, newWork];
    setWorkList(updatedList);
    localStorage.setItem("works", JSON.stringify(updatedList));
  };

  const toggleStatus = (index: number) => {
    const updatedList = [...workList];
    updatedList[index].status =
      updatedList[index].status === "label" ? "checked" : "label";
    setWorkList(updatedList);
    localStorage.setItem("works", JSON.stringify(updatedList));
  };

  const deleteWork = (index: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
      const updatedList = [...workList];
      updatedList.splice(index, 1);
      setWorkList(updatedList);
      localStorage.setItem("works", JSON.stringify(updatedList));
    }
  };

  return (
    <div>
      <main>
        <section>
          <h1>Danh sách công việc</h1>
          <div className="input-box">
            <input type="text" id="newWorkInput" className="form-control" />
            <button className="addBtn btn btn-primary" onClick={addWork}>
              Thêm
            </button>
          </div>
          {workList.map((work, index) => (
            <WorkItem
              key={index}
              work={work}
              index={index}
              toggleStatus={toggleStatus}
              deleteWork={deleteWork}
            />
          ))}
          <div>
            <p>Công việc đã hoàn thành {calculateProgress()}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WorkItemProps {
  work: Work;
  index: number;
  toggleStatus: (index: number) => void;
  deleteWork: (index: number) => void;
}

const WorkItem: React.FC<WorkItemProps> = ({
  work,
  index,
  toggleStatus,
  deleteWork,
}) => {
  return (
    <div className="workList">
      <div className="checkBox">
        <input
          type="checkbox"
          checked={work.status === "checked"}
          onChange={() => toggleStatus(index)}
        />
        {work.status === "checked" ? (
          <s className={work.status}>{work.work}</s>
        ) : (
          <span className={work.status}>{work.work}</span>
        )}
      </div>
      <div className="statusBox">
        <a
          href="javascript:void(0)"
          onClick={() => updateWork(index)}
          style={{ color: "yellow" }}
        >
          <i className="fa-solid fa-pencil"></i>
        </a>
        <a
          href="javascript:void(0)"
          onClick={() => deleteWork(index)}
          style={{ color: "red" }}
        >
          <i className="fa-solid fa-trash"></i>
        </a>
      </div>
    </div>
  );
};

export default BT11;
