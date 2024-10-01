import { Input } from "@/components/ui/input";
import { contentMenu } from "@/lib/menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const [cari, setCari] = useState("");
  const [cat, setCat] = useState("");

  const cats = Array.from(new Set(contentMenu.map((item) => item.category)));

  let filteredMenu = contentMenu;
  if (cari.length > 0) {
    filteredMenu = filteredMenu.filter((item) => item.title.toLowerCase().includes(cari.toLowerCase()));
  }

  if (cat !== "all" && cat !== "") {
    filteredMenu = filteredMenu.filter((item) => item.category === cat);
  }

  return (
    <div className="py-4">
      <div className="flex gap-2">
        <Input placeholder="Search here.." onChange={(e) => setCari(e.target.value)} className="w-full" />
        <Select value={cat} onValueChange={(value) => setCat(value)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {cats.map((item, i) => (
              <SelectItem key={i} value={item} className="capitalize">
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 py-2">
        {filteredMenu?.length > 0 &&
          filteredMenu.map((item, i) => (
            <React.Fragment key={i}>
              {item.category === "static web" ? (
                <a href={item.href} className="hover:scale-105 group transition relative group border rounded p-4">
                  <h1 className="capitalize text-primary mb-2 group-hover:underline">{item.title}</h1>
                  <p className="text-sm">{item.description}</p>
                  <div className="text-sm text-muted-foreground">#{item.category}</div>
                </a>
              ) : (
                <Link to={item.href} className="hover:scale-105 group transition relative group border rounded p-4">
                  <h1 className="capitalize text-primary mb-2 group-hover:underline">{item.title}</h1>
                  <p className="text-sm">{item.description}</p>
                  <div className="text-sm text-muted-foreground">#{item.category}</div>
                </Link>
              )}
            </React.Fragment>
          ))}
      </div>
      {filteredMenu?.length === 0 && <p className="">No data found</p>}
    </div>
  );
}
