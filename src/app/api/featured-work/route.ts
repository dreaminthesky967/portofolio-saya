import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Web Design & deployment for School",
        description: "Designed and deployed a responsive web platform for a school, creating a clear and user-friendly digital experience that emphasizes accessibility, usability, and modern design tailored to the needs of students, teachers, and parents.",
        roles: ["FUll Stack Developer"],
        image: "/images/feature-work/learning.png"
    },
    {
        title: "Finding bugs in my own code",
        description: "The bug occurs due to a mistake in the logical flow of the code, where the condition or sequence of operations does not match the intended outcome.",
        roles: ["Master Debugger in AI"],
        image: "/images/feature-work/bug.jpeg"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};