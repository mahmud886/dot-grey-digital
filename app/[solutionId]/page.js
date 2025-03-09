const ServicesPage = async ({ params }) => {
  const { solutionId } = await params;
  return <div>ServicesPage {solutionId}</div>;
};

export default ServicesPage;
