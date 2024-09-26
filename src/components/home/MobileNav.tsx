import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "./Header";
import { navMenu } from "@/lib/menu";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div className="block sm:hidden">
      <Sheet>
        <SheetTrigger className="block">
          <Menu />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className="text-left">
              <Logo />
            </SheetTitle>
            <SheetDescription className="hidden">
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </SheetDescription>
            <SheetClose asChild>
              <Accordion type="multiple">
                {navMenu.map((item, i) => (
                  <AccordionItem key={i} value={`Item ${i}`}>
                    <SheetClose asChild>
                      <AccordionTrigger>
                        <Link to={item.href}>{item.label}</Link>
                      </AccordionTrigger>
                    </SheetClose>
                    {/* <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent> */}
                  </AccordionItem>
                ))}
              </Accordion>
            </SheetClose>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
