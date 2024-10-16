import { React } from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiAdjust, BiLoader } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import {BsCheckCircleFill,BsFillExclamationSquareFill,BsFillCheckCircleFill,} from "react-icons/bs";
import "./DashBoard.css";
import Card from "../Card/Card";
const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div className="imageContainer relative">
                    </div>
                  ) : isStatus ? (
                    <div className="cardTitle">
                      {element[index].title === "Backlog" ? (
                        <BiLoader style={{ fontSize: "13px" }} />
                      )
                        : element[index].title === "Todo" ? (
                          <FaRegCircle
                            style={{ fontSize: "13px", color: "#ddeded" }}
                          />
                        ) : element[index].title === "In progress" ? (
                          <BiAdjust
                            style={{ fontSize: "13px", color: "#f2d750" }}
                          />
                        ) : element[index].title === "Done" ? (
                          <BsCheckCircleFill />
                        ) : (
                          <IoMdCloseCircleOutline />
                        )}
                    </div>
                  ) : isPriority ? (
                    <div className="tags color-grey">
                      {element[index].title === "Low" ||
                        element[index].title === "Medium" ||
                        element[index].title === "High" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"

                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-signal"
                          viewBox="0 0 16 16"
                        >
                          <rect x="1" y="10" width="3" height="2" />
                          <rect
                            x="5"
                            y="7"
                            width="3"
                            height="5"
                            opacity={
                              element[index].title === "Medium" ||
                                element[index].title === "High"
                                ? 1
                                : 0.25
                            }
                          />
                          <rect
                            x="9"
                            y="4"
                            width="3"
                            height="8"
                            opacity={element[index].title === "High" ? 1 : 0.25}
                          />
                        </svg>
                      ) : element[index].title === "Urgent" ? (
                        <BsFillExclamationSquareFill />
                      ) : (
                        <p></p>
                      )}
                    </div>
                  ) : (
                    <DiCodeigniter />
                  )}{" "}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <AiOutlinePlus />{" "}
                  <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" >
                <div className="cardTitle">
                  <BsFillCheckCircleFill style={{ color: "blue" }} />
                </div>{" "}
                <span className="light-text">Done</span> <span className="custom-text-color">0</span>
              </div>
              <div className="rightView">
                <AiOutlinePlus />{" "}
                <span className="spaced-text">...</span>
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div className="leftView" >
                <div className="cardTitle">
                  <MdCancel style={{ color: "grey" }} />
                </div>{" "}
                <span className="light-text">Canceled</span> <span className="custom-text-color">0</span>
              </div>
              <div className="rightView">
                <AiOutlinePlus />{" "}
                <span className="spaced-text">...</span>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};
export default DashBoard;
