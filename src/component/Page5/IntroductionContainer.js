import React from "react";
import Introduction from "./Introduction";

const IntroductionContainer = () => {
  const sampleImageUrl = "https://via.placeholder.com/200";
  const sampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`;
  return (
    <div className="introduction-list-outer-container" id="tab3">
      <Introduction
        profileImageUrl={sampleImageUrl}
        introductionText={sampleText}
        imagePosition={0}
      />
      <Introduction
        profileImageUrl={sampleImageUrl}
        introductionText={sampleText}
        imagePosition={1}
      />

      <Introduction
        profileImageUrl={sampleImageUrl}
        introductionText={sampleText}
        imagePosition={0}
      />

      <Introduction
        profileImageUrl={sampleImageUrl}
        introductionText={sampleText}
        imagePosition={1}
      />
    </div>
  );
};

export default IntroductionContainer;
