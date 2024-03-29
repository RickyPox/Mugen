import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Services() {


/* const titleRef = useRef<HTMLObjectElement>(null)
const ref = useRef<HTMLElement>(null)
const [scrollOffset, setScrollOffset] = useState(0);
const [lastScrollTop, setLastScrollTop] = useState(0);



useEffect(() => {
    const handleScroll = () => {
        if (ref.current && titleRef.current) {
            const textRect =  titleRef.current.getBoundingClientRect()
            const rect = ref.current.getBoundingClientRect();
            const currentScrollTop = rect.top
            
            if(rect.top < 0 && rect.bottom > textRect.bottom ){
                setScrollOffset(-rect.top);
                setLastScrollTop(currentScrollTop);
            }
            else if(currentScrollTop > lastScrollTop && rect.top < textRect.top){
                setScrollOffset(-rect.top);
            }
        }
    };

    // Adiciona um ouvinte de evento de rolagem
    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, lastScrollTop, titleRef]);
 */

  const services = [
    {
        name: "Operations Management Consulting Services",
        text:"Create and implement policies for DAO’s operations and approvals. Represent the DAO or related entities in negotiations with customers, vendors, third-party service providers, and other key contacts to secure for it the most effective contract terms for the DAO.",
    },
    {
        name: "Strategy, Growth & Scalability Advisory Services",
        text:"Consult with community and core team to provide advice and guidance regarding the DAO’s (or related entities’) leadership on current regulatory environment and operational restrictions with legal counsel; design and implement procedures for risk reduction in commercial relationships, corporate, tax, regulation, and employment issues."    },
    {
        name: "Ecosystem & Grants Program Management",
        text:"Establish bespoke policies and procedures for disbursing funds to grant recipients; establish competitive bid system for DAO proposals; and manage grants program in accordance with the DAO’s policies and procedures.",
    },
    {
        name: "Treasury Management Services",
        text:"Design bespoke treasury monitoring dashboard for DAO communities, consult Foundation Company directors on management of treasury capital and diversification of assets, support multisig signers managed by third party custody providers, and more.",
    },
    {
        name: "Finance & Accounting Services",
        text:" Keep basic books and records for DAO’s affiliated entities, provide document retention and availability services, assist with opening and administering bank accounts for DAO’s affiliated entities, and more.",
    },
    {
        name: "Governance & Voting Services",
        text:"Manage, monitor, and record the results of the governance process, voting and results, ecosystem grants program management services, and more.",
    },
    {
        name: "Proposal Management Services",
        text:"Create and implement policies and procedures for DAO Proposals and approvals; maintain Discourse or other DAO governance forum; track Proposal progress and implementation in accordance with the DAO’s governance parameters.",
    },
    {
        name: "Community Outreach & Social Media Account Administration",
        text:"Manage communications between the DAO and its community members, act as primary point of contact for the DAO and its related entities, moderate DAO's discussion forums (e.g., Twitter, Discord, Discourse, etc.), attend to inbound media inquiries, and more.",
    },
  ]


return (
<div>
<Head>
      <title>Mugen DAO</title>
    </Head>
    <section>
    <Navbar></Navbar>
    </section>
    <section className="2xl:mx-[130px] lg:mx-[50px] mx-[20px] mt-[150px]">
    <div className="flex flex-col space-y-[50px] items-center">
        <h1 className="text-center">
        Builders should{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#673147] from-[-30%] to-[#FFFFFF] to-[400%]">
        focus on building.
        </span>
        <br></br>We'll take care of the rest.
        </h1>
        <p className="text-center w-3/4 2xl:w-1/2">
        Our best-in-class suite of DAO management services are designed to let core teams focus on building decentralized protocols while we take care of the necessary administrative tasks communities require.
        </p>
    </div>
    </section>
    <section  className="2xl:px-[130px] lg:px-[50px] px-[20px] pt-[70px] mb-[150px] mt-[300px] relative">
    <div>
        <h2 className={`text-[40px] top-[70px] text-center mb-[100px]`} >SERVICES</h2>
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:gap-[50px] gap-[30px] justify-items-center">
        {services.map((service, index)=> (
            <div key={index} className="flex flex-col items-center gap-[50px] bg-[#673147] py-[50px] px-[25px] rounded-[30px] ">
            <p className="font-bold text-[26px] text-white text-center lg:h-[100px]">
                {service.name}
            </p>
            <p className="text-[18px] text-justify">
                {service.text}
            </p>
        </div>
        ))}

    </div>
    </section>

    <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mb-[130px] mt-[250px] relative">
    <img
            src="/mugen_koi.png"
            className="absolute hidden lg:block right-0 2xl:-top-[30%] -top-[60%] pointer-events-none"
            ></img>
    <div className="flex flex-col lg:flex-row  px-[20px] py-[20px] lg:px-[50px] 2xl:px-[150px] lg:py-[90px] space-y-[100px] lg:space-y-[0] items-center justify-between rounded-[30px]">
        <div className="flex flex-col space-y-[30px] lg:w-1/2 ">
        <h1>Optimize Your DAO</h1>
        <p>
        Schedule an introductory call with our crypto-native team to learn more about how Mugen can support your community.
        </p>
        </div>
        <div>
        <Link href="/contact"><p className="text-white px-[80px] py-[20px] font-bold bg-[#EE6FA3] rounded-full ">
            Let's Chat
        </p></Link>
        </div>
    </div>
    </section>
    <Footer></Footer>
</div>
);
}
