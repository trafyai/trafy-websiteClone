
'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@context/AuthContext";

export default function TestSelf(props) {
    const [accordionId, setAccordionId] = useState(props.contents[0]?.id || null);
    const [subAccordionId, setSubAccordionId] = useState(null);
    const [accOpen, setAccOpen] = useState(true);
    const { user, logOut, loading } = UserAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login'); // Redirect to login if not authenticated
        }
    }, [user, loading, router]);

    useEffect(() => {
        // Set initial sub-accordion to the first subContent of the initially selected accordion
        const initialSubContentId = props.contents[0]?.subContent[0]?.id || null;
        setSubAccordionId(initialSubContentId);
    }, [props.contents]);

    const handleAccordionClick = (id) => {
        if (accordionId === id) {
            setAccOpen(!accOpen); // Toggle the accordion if it's already open
        } else {
            setAccordionId(id);
            const newSubContentId = props.contents.find(item => item.id === id)?.subContent[0]?.id || null;
            setSubAccordionId(newSubContentId); // Set sub-accordion to the first subContent of the new accordion
            setAccOpen(true); // Open the new accordion
        }
    };

    const handleSubAccordionClick = (id, event) => {
        event.stopPropagation(); // Prevent the main accordion click event from firing
        setSubAccordionId(id);
    };

    const handleNextChapterClick = () => {
        const currentAccordionIndex = props.contents.findIndex(item => item.id === accordionId);
        const currentAccordion = props.contents[currentAccordionIndex];
        const currentSubContentIndex = currentAccordion.subContent.findIndex(subItem => subItem.id === subAccordionId);
        const nextSubContentIndex = currentSubContentIndex + 1;

        if (nextSubContentIndex < currentAccordion.subContent.length) {
            // Move to the next sub-content in the current accordion
            const nextSubContentId = currentAccordion.subContent[nextSubContentIndex].id;
            setSubAccordionId(nextSubContentId);
        } else {
            // Move to the first sub-content of the next accordion
            const nextAccordionIndex = currentAccordionIndex + 1;
            if (nextAccordionIndex < props.contents.length) {
                const nextAccordionId = props.contents[nextAccordionIndex].id;
                const nextSubContentId = props.contents[nextAccordionIndex]?.subContent[0]?.id || null;
                setAccordionId(nextAccordionId);
                setSubAccordionId(nextSubContentId);
                setAccOpen(true);
            }
        }
    };

    // Find the currently selected content for the main accordion
    const selectedAccordionContent = props.contents.find(item => item.id === accordionId);
    // Find the currently selected content for the sub-accordion
    const selectedSubContent = selectedAccordionContent?.subContent.find(subItem => subItem.id === subAccordionId);

    // Determine if there is a next chapter
    const currentAccordionIndex = props.contents.findIndex(item => item.id === accordionId);
    const currentAccordion = props.contents[currentAccordionIndex];
    const currentSubContentIndex = currentAccordion.subContent.findIndex(subItem => subItem.id === subAccordionId);
    const hasNextChapter = (currentSubContentIndex + 1 < currentAccordion.subContent.length) ||
        (currentAccordionIndex + 1 < props.contents.length);

    return (
        <div style={{ padding: "60px" }}>
            <h1>{props.id}</h1>
            <div style={{ display: "flex", gap: "4rem" }}>

                <div className="main-content" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {selectedAccordionContent ? (
                        <>
                            <h4>{selectedAccordionContent.title}</h4>
                            <p>{selectedAccordionContent.subTitle}</p>
                            {/* Display sub-accordion content if available */}
                            {selectedSubContent && (
                                <>
                                    <h5>{selectedSubContent.title}</h5>
                                    <p>{selectedSubContent.subTitle}</p>
                                </>
                            )}
                        </>
                    ) : (
                        <p>No content available</p>
                    )}
                    {hasNextChapter && (
                        <button onClick={handleNextChapterClick}>Next Chapter</button>
                    )}
                </div>

                <div className="accordion-container" style={{ width: "40%", display: "flex", flexDirection: "column" }}>
                    {props.contents.map((item, index) => (
                        <div
                            key={index}
                            className="accordion-box"
                            style={{ padding: "16px", border: "1px solid", cursor: "pointer" }}
                            onClick={() => handleAccordionClick(item.id)}
                        >
                            <p>{item.title}</p>
                            {accordionId === item.id && accOpen && item.subContent && (
                                item.subContent.map((subItem, subIndex) => (
                                    <div
                                        key={subIndex}
                                        style={{
                                            padding: "8px",
                                            cursor: "pointer",
                                            border: "1px solid #ddd",
                                            backgroundColor: subItem.id === subAccordionId ? '#f0f0f0' : 'white'
                                        }}
                                        onClick={(e) => handleSubAccordionClick(subItem.id, e)}
                                    >
                                        <p>{subItem.title}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

