"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";



const popularContent = [
    {
        id: 1,
        title: "Mastering TypeScript",
        badge: "Coding",
        image:
            "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 5100,
    },
    {
        id: 2,
        title: "Cloud Computing Explained",
        badge: "Tech",
        image:
            "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2950,
    },
    {
        id: 3,
        title: "Generative AI Models",
        badge: "AI",
        image:
            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 3600,
    },
    {
        id: 4,
        title: "Next.js 15 Features",
        badge: "Coding",
        image:
            "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1750,
    },
    {
        id: 5,
        title: "Robotics in 2025",
        badge: "AI",
        image:
            "https://images.pexels.com/photos/73910/pexels-photo-73910.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2200,
    },
];

const latestTransactions = [
    {
        id: 1,
        title: "License Purchase",
        badge: "Alice Carter",
        image:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1800,
    },
    {
        id: 2,
        title: "Consulting Fee",
        badge: "Robert White",
        image:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 2700,
    },
    {
        id: 3,
        title: "Annual Subscription",
        badge: "Sophia Green",
        image:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1900,
    },
    {
        id: 4,
        title: "One-time Payment",
        badge: "Daniel Lee",
        image:
            "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 3300,
    },
    {
        id: 5,
        title: "Refund Issued",
        badge: "Emily Johnson",
        image:
            "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1250,
    },
];

const CardList = ({ title }: { title: string }) => {

    const list = title === "Popular Content" ? popularContent : latestTransactions
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {list.map((item) => (
                    <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardContent className="flex-1 p-0">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="secondary">{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CardList;