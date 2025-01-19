import React, { useRef } from "react";
import { useState } from "react";

type task = {
  id: number;
  task: string;
  dueDate: string;
  priority: string;
};

type Data = {
  [key: string]: task[];
};

interface DraggedItem {
  task: task;
  sourceKey: string;
}

const BoardsList = ({ data }: Data) => {
  const [workItem, setWorkItem] = useState(data);

  const [draggedItem, setDraggedItem] = useState<DraggedItem>({
    sourceKey: "",
    task: {
      id: 0,
      task: "",
      dueDate: "",
      priority: "",
    },
  });

  const container = useRef(null);

  const item = useRef(null);

  const handleDrop = (targetkey: string) => {
    const { sourceKey } = draggedItem;
    if (targetkey === sourceKey) {
      return;
    }

    const prevData = [...workItem[targetkey]];
    const newData = [...prevData, draggedItem?.task];

    const updatedSourceData = workItem[sourceKey]?.filter(
      (item: task) => item?.id != draggedItem?.task?.id
    );

    setWorkItem((prev) => {
      return {
        ...prev,
        [targetkey]: newData,
        [sourceKey]: updatedSourceData, // Use square brackets for dynamic keys
      };
    });
  };

  const handleDragStart = (task: task, key: string) => {
    setDraggedItem({ task: task, sourceKey: key });
  };
  return (
    <div>
      <div className="containers">
        {Object.keys(workItem).map((key) => {
          return (
            <div
              ref={container}
              key={key}
              onDragOver={(e) => e.preventDefault()} // Allow dropping
              onDrop={() => handleDrop(key)} // Pass the target column key
            >
              <h3 className="heading">{key.toUpperCase()}</h3>
              <div className="tasks">
                {workItem[key].map((task: task) => {
                  return (
                    <p
                      className="task"
                      draggable
                      ref={item}
                      key={task?.id}
                      onDragStart={() => handleDragStart(task, key)}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      {task?.task}
                    </p>
                  );
                })}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardsList;
