import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contentMenu } from "@/lib/menu";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const [cari, setCari] = useState("");
  const [cat, setCat] = useState("");

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
            <SelectItem value="tips">Tips</SelectItem>
            <SelectItem value="components">Components</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 py-2">
        {filteredMenu?.length > 0 &&
          filteredMenu.map((item, i) => (
            <div key={i} className="relative group border rounded p-2">
              <h1 className="capitalize">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
              <p className="text-sm text-muted-foreground">#{item.category}</p>
              <Button
                asChild
                size="icon"
                className="absolute scale-0 group-hover:scale-100 right-0 top-0 m-2 transition"
              >
                <Link to={item.href}>
                  <Eye className="size-4" />
                </Link>
              </Button>
            </div>
          ))}
      </div>
      {filteredMenu?.length === 0 && <p className="">No data found</p>}
    </div>
  );
}
