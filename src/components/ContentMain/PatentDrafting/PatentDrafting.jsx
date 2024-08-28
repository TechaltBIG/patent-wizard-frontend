import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const PatentDrafting = () => {
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");

  useEffect(() => {
    const storedProvisionalText = localStorage.getItem("answer6");
    if (storedProvisionalText) {
      setAnswer6(storedProvisionalText);
    }
  }, []);

  useEffect(() => {
    const storedClaimsText = localStorage.getItem("answer7");
    if (storedClaimsText) {
      setAnswer7(storedClaimsText);
    }
  }, []);

  return (
    <div>
      <h1 className="head-stl" style={{ color: "#36718b" }}>
        Patent Drafting
      </h1>
      <p>{answer6}</p>
      <br />
      <br />
      <br />
      <p>{answer7}</p>
    </div>
  );
};

export default PatentDrafting;
