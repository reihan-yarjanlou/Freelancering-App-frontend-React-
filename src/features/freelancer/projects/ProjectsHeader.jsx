import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropdown from "../../../ui/FilterDropdown";

const sortOptions = [
  { value: "", label: "مرتب سازی" },
  { value: "earliest", label: "قدیمی ترین" },
  { value: "latest", label: "جدید ترین" },
];
const statusOptions = [
  { value: "ALL", label: "همه" },
  { value: "OPEN", label: "باز" },
  { value: "CLOSED", label: "بسته" },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="mb-10 flex items-center justify-between text-secondary-700">
      <h1 className="text-xl font-bold">لیست پروژه ها</h1>
      <div className="flex items-center gap-x-3">
        <Filter filterField="status" label="وضعیت" options={statusOptions} />
        <FilterDropdown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
        <FilterDropdown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
