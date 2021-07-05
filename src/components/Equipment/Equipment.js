import React from "react";
import Devices from "../Devices/Devices";
import SelectBranch from "../Cartridges/formComponent/SelectBranch";
import SelectBranchRequest from "../Cartridges/SelectBranchRequest/SelectBranchRequest";
import "./Equipment.scss";
import { ADD_BRANCH_CARTRIDGES, DEVICE_FILTER_BRANCH } from "../../redux/types";

export default function Equipment() {
  return (
    <div className="equipment">
      <SelectBranch add={ADD_BRANCH_CARTRIDGES} filter={DEVICE_FILTER_BRANCH} />
      <hr style={{ width: "70%" }} />
      <div className="__cartridges">
        <SelectBranchRequest />
      </div>
      <hr style={{ width: "90%" }} />
      <div className="__devices">
        <Devices />
      </div>
    </div>
  );
}
