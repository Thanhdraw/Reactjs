import React, { useEffect, useRef } from "react";
import useLinkNewTab from "../../hooks/useLinkNewTap";
import useHover from "../../hooks/useHover";

const Blog = () => {
  const { hovered, nodeRef } = useHover();
  const { contentRef } = useLinkNewTab();
  return (
    <div>
      <div className="entry-content" ref={contentRef}>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          deleniti distinctio ipsa corrupti rerum aliquid soluta commodi, iure
          doloribus obcaecati placeat error porro quidem nulla voluptatum
          tempore. Voluptate, saepe{" "}
          <a
            href="https://google.com"
            className={`underline ${hovered ? "text-green-400" : ""}`}
            ref={nodeRef}
          >
            google.com
          </a>
          ?
        </p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          deleniti distinctio ipsa{" "}
          <a href="https://google.com" className="underline">
            google.com
          </a>{" "}
          rerum aliquid soluta commodi, iure doloribus obcaecati placeat error
          porro quidem nulla voluptatum tempore. Voluptate, saepe suscipit?
        </p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          deleniti distinctio ipsa corrupti rerum aliquid soluta commodi, iure
          doloribus obcaecati{" "}
          <a href="https://google.com" className="underline">
            google.com
          </a>{" "}
          error porro quidem nulla voluptatum tempore. Voluptate, saepe
          suscipit?
        </p>
      </div>
    </div>
  );
};

export default Blog;
