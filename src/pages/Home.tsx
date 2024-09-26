import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { componentMenu } from "@/lib/menu";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="py-4">
      <Input placeholder="Search here.." />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 py-2">
        {componentMenu.map((item, i) => (
          <div key={i} className="relative group border rounded p-2">
            <h1 className="capitalize">{item.title}</h1>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <Button asChild size="icon" className="absolute scale-0 group-hover:scale-100 right-0 top-0 m-2 transition">
              <Link to={item.href}>
                <Eye className="size-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
