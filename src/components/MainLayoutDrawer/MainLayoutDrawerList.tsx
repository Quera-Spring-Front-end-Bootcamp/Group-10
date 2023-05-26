type MainLayoutDrawerListSubProject = {
  id: number;
  title: string;
};
type MainLayoutDrawerList = {
  id: number;
  title: string;
  color: string;
  subProjects?: MainLayoutDrawerListSubProject[];
}[];

const tempProjects: MainLayoutDrawerList = [
  {
    id: 1,
    title: "Project 1",
    color: "#ff0000",
  },
];

function MainLayoutDrawerList() {
  return <div>MainLayoutDrawerList</div>;
}

export default MainLayoutDrawerList;
