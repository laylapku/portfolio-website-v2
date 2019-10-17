import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillBlock = props => {
  const { item } = props;

  return (
    <div
      className="skills-block col-12 col-lg-4 mb-5 mb-lg-0"
      key={item.node.id}
    >
      <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
        <h4 className="skills-cat text-center mb-3 mt-5">{item.node.name}</h4>
        <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
          <img alt="" className="skills-icon" src={item.node.icon} />
        </div>
        <ul className="skills-list list-unstyled text-secondary">
          {item.node.value.map((ele, idx) => (
            <li className="mb-2" key={item.node.id + "_skill_" + idx}>
              <FontAwesomeIcon className="mr-2 text-primary" icon="check" />
              {ele}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillBlock;
