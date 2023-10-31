"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import NextImage from "../Shared/Image/NextImage";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BsChevronDown } from "react-icons/bs";

const Faqs = () => {
  const faqs = [
    {
      Title: "Why wouldn't I just hire a full-time designer?",
      AriaControls: "panel1a-content",
      Id: "panel1a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "Why wouldn't I just hire a full-time designer?",
      AriaControls: "panel2a-content",
      Id: "panel2a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "Why wouldn't I just hire a full-time designer?",
      AriaControls: "panel3a-content",
      Id: "panel3a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "Why wouldn't I just hire a full-time designer?",
      AriaControls: "panel4a-content",
      Id: "panel4a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "Why wouldn't I just hire a full-time designer?",
      AriaControls: "panel5a-content",
      Id: "panel4a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "Why wouldn't I just hire a full-time designer?",
      AriaControls: "panel6a-content",
      Id: "panel4a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <ComponentWrapper id="faq" style="lg:py-20 py-10 relative">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionHeading heading="FAQS" highlight="" />
        <div className="w-full">
          {faqs.map((item: any, index: number) => {
            return (
              <Accordion sx={{ boxShadow: "none" }} key={index}>
                <AccordionSummary
                  expandIcon={
                    <BsChevronDown className="text-brand-main text-2xl" />
                  }
                  aria-controls={item.AriaControls}
                  id={item.Id}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Quicksand",
                      color: "#D85464",
                      fontSize: "18px",
                    }}
                  >
                    {item.Title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Quicksand",
                      fontWeight: "medium",
                      color: "#1E1E1E",
                      fontSize: "16px",
                    }}
                  >
                    {item.Detail}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
      <div className="absolute top-[250px] right-0 z-10">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
      <div className="absolute top-[200px] left-0 z-10">
        <NextImage
          imageSrc="/Assets/CurvedGift.png"
          containerStyle="h-[48px] w-[130px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default Faqs;
