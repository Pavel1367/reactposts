import React from "react";
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";
export default function PostFilter({filter, setFilter}) {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />
      <Select
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      />
    </div>
  );
}
