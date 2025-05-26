export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <h1 className="text-3xl text-blue-300"> Reviews Page for {productId}</h1>
  );
}
