import Image from "next/image";
import { HomePage } from "../../components/homePage";
import client from "../../tina/__generated__/client";

export default async function Home() {
  const res = await client.queries.page({relativePath: "homePage.json"}); 
  return (
    <HomePage  data={res.data} query={res.query} variables={res.variables} />
  );
}
