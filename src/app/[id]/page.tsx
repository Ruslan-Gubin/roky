import { cookies } from 'next/headers'
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/Breadcrumbs";
import { UserCardInfoMain } from "@/widgets/user/user-card-info-main/UserCardInfoMain";

type Props = {
  params: { id: string };
};


export async function generateMetadata({ params: { id } }: Props) {
  return {
    title: id ? id : 'User Info',
    description: 'User info page',
  }
}

export default async function UserInfo() {
  const cookieStore = cookies();
  const user = cookieStore.get('user-info')?.value;

if (!user) return notFound();

  const breadcrumb = [
    { value: "Пользователи", href: "/" },
    { value: "Информация", href: null },
  ];
  
  return (
    <>
    <Breadcrumbs breadcrumbs={breadcrumb} />
    {user &&
    <UserCardInfoMain user={JSON.parse(user)}/>
    }
    </>
  );
};

