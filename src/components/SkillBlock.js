import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reqGeneralSvgs } from "../utils/svgs.util";

const SkillBlock = props => {
  const { id, name, icon, value } = props.item;

  return (
    <div className="skills-block col-12 col-lg-4 mb-5 mb-lg-0" key={id}>
      <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
        <h4 className="skills-cat text-center mb-3 mt-5">{name}</h4>
        <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
          <img
            alt=""
            className="skills-icon"
            src={reqGeneralSvgs(`./${icon.toLowerCase()}.svg`)}
          />
        </div>
        <ul className="skills-list list-unstyled text-secondary">
          {value.map((ele, idx) => (
            <li className="mb-2" key={id + "_skill_" + idx}>
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
