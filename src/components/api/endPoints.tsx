const endPoints = {
  login: "/auth/login",
  register: "/auth/register",
  applicantsRegister: "/applicants/", // POST
  applicantsList: "/applicants", // GET
  applicantDetail: "/applicants/:id", // GET
  applicantUpdateStatus: "/applicants/:id/status", // PUT
  applicantPhoto: "/applicants/:id/photo", // GET
  applicantDocument: "/applicants/:id/document", // GET
  createDepartmentHead: "/auth/create-department-head",
  createTeacher: "/auth/create-teacher",
  departmentHeads: "/department-heads",
  teachers: "/teachers",
  departments: "/departments",
  impairments: "/impairments",
  semesters: "/semesters",
  schoolBackgrounds: "/school-backgrounds",
  programModality: "/program-modality",
  classYears: "/class-years",
  semester: "/semesters",
  BatchClassYearSemesters: "/bcsy",
  batches: "/batches",
  courses: "/courses/single",
  regions: "/region",
  zonesByRegion: "/zone/region",
  woredasByZone: "/woreda/zone",
};

export default endPoints;
