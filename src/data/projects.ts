import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type Project = {
  id: string;
  index: string;
  name: string;
  category: "Residential" | "Commercial" | "Interior" | "Hospitality" | "Cultural";
  location: string;
  year: string;
  image: string;
  span?: "tall" | "wide" | "normal";
};

export const projects: Project[] = [
  { id: "casa-mahalaxmi", index: "01", name: "Casa Mahalaxmi", category: "Residential", location: "Mumbai", year: "2024", image: project1, span: "tall" },
  { id: "meridian-tower", index: "02", name: "Meridian Tower", category: "Commercial", location: "Bengaluru", year: "2023", image: project2 },
  { id: "shadow-pavilion", index: "03", name: "Shadow Pavilion", category: "Cultural", location: "Ahmedabad", year: "2023", image: project3 },
  { id: "house-no-five", index: "04", name: "House No. Five", category: "Residential", location: "Goa", year: "2022", image: project4 },
  { id: "the-arcadia", index: "05", name: "The Arcadia", category: "Hospitality", location: "Udaipur", year: "2022", image: project5, span: "wide" },
  { id: "vault-residence", index: "06", name: "Vault Residence", category: "Interior", location: "New Delhi", year: "2021", image: project6 },
];
