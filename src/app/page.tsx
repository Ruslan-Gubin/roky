import { notFound,  } from "next/navigation";
import { TableMain } from "@/widgets/table/table-main/TableMain";
import { fetchUserList } from "@/shared/api/user-api/fetch-users";
import { TableHeaderActions } from "@/widgets/table/table-header-actions/TableHeaderActions";
import { FilterTable } from "@/widgets/filter-table/FilterTable";


export default async function Home(params: { params: object, searchParams: { page: string, search: string } }) {
  const page = params.searchParams.page;
  const search = params.searchParams.search;
  const userList = await fetchUserList(page, search);

  if (userList instanceof Error) return notFound();


  return (
    <>
      <TableHeaderActions>
      <FilterTable />
     </TableHeaderActions>
  <TableMain  userList={userList.results}/>
    </>
  );
}
