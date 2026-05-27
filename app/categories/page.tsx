import React from "react";
import CategoriesClient from "./CategoriesClient";

export const metadata = {
  title: "Product Collections & Categories | BathX Ateliers",
  description: "Browse our luxury product collections. Filter by PVD finishes (Brushed Gold, Matte Black, Rose Gold), product types, or series catalogs.",
};

export default function CategoriesPage() {
  return (
    <CategoriesClient />
  );
}
