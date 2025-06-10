import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationBar() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-white border border-[#E9E9E9] w-10 h-10"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-yellow-primary border border-yellow-primary w-10 h-10">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-white border border-[#E9E9E9] w-10 h-10">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-white border border-[#E9E9E9] w-10 h-10">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-white border border-[#E9E9E9] w-10 h-10">
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-white border border-[#E9E9E9] w-10 h-10"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
