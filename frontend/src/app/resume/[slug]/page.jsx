import ResumeCompo from "./ResumeCompo";


export async function generateStaticParams() {
  return [
   
    { slug: "resumeone" },
    { slug: "resumetwo" },
    { slug: "resumethree" },
    { slug: "resumefour" },
    { slug: "resumefive" },
    { slug: "resumesix" },
  ];
}

const Page = ({ params }) => {
  const { slug } = params;

  return (
    <div className="min-h-screen mt-28 ">
      

<ResumeCompo  slug={slug}/>

    </div>
  );
};

export default Page;
