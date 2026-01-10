"use client"

import ComponentSection from "./componentSection";
import CardVariant from "../components/card";
import { useTheme } from "../context/themeContext";
import { gradients } from "../tokens/themes";
import PropsTable from "./propsTable";

export default function CardSection () {
    const { theme } = useTheme();

    const cardProps = [
        {
            name: "variant",
            meta: "(Required)",
            description:
            "Menentukan jenis card yang digunakan. Tersedia: default, interactive, dan float.",
        },
        {
            name: "theme",
            meta: "(Required)",
            description:
            "Menentukan tema warna card, bisa light atau dark.",
            colors: [
            { name: "light", value: gradients.light },
            { name: "dark", value: gradients.dark },
            ],
        },
        {
            name: "title",
            meta: "(Optional)",
            description:
            "Judul utama yang ditampilkan pada card.",
        },
        {
            name: "desc",
            meta: "(Optional)",
            description:
            "Deskripsi singkat untuk menjelaskan isi card.",
        },
        {
            name: "image",
            meta: "(Optional)",
            description:
            "Gambar yang ditampilkan pada card sebagai pendukung visual.",
        },
        {
            name: "buttonLabel",
            meta: "(Optional)",
            description:
            "Teks tombol yang muncul di dalam card.",
        },
        {
            name: "extra",
            meta: "(Optional)",
            description:
            "Konten tambahan untuk variant interactive.",
        },
    ];


    return (
        <>
            <ComponentSection
                title="Default Card"
                preview={
                    <CardVariant
                        theme="dark"
                        title="Sample Card"
                        desc="This is a sample card component used to showcase layout, styling, and interaction within the UI."
                        image="https://images.unsplash.com/photo-1765004775664-24306ca36b8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        buttonLabel="Explore"
                    />
                }
                code={`"use client";
import { CardVariant } from "lumishade-ui";

export default function Card() {
    return (
        <>
            <CardVariant
                variant="default"
                theme="dark"
                title="Sample Card"
                desc="This is a sample card component used to showcase layout, styling, and interaction within the UI."
                image="https://images.unsplash.com/photo-1765004775664-24306ca36b8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                buttonLabel="Explore"
            />
        </>
    )
}
`}
            />

            <ComponentSection
                title="Card Interactive"
                preview={
                    <CardVariant
                        variant="interactive"
                        theme="dark"
                        title="Interactive Card"
                        desc="An interactive card component designed to display rich content and user interactions."
                        image="https://images.unsplash.com/photo-1767589565131-3a8136927e29?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0"
                        extra="This section can be used to show additional details, extended descriptions, or contextual information."
                    />
                }
                code={`"use client";
import { CardVariant } from "lumishade-ui";

export default function Card() {
    return (
        <>
            <CardVariant
                variant="interactive"
                theme="dark"
                title="Interactive Card"
                desc="An interactive card component designed to display rich content and user interactions."
                image="https://images.unsplash.com/photo-1767589565131-3a8136927e29?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0"
                extra="This section can be used to show additional details, extended descriptions, or contextual information."
            />
        </>
    )
}
`}
            />

            <ComponentSection
                title="Card Float"
                preview={
                    <CardVariant
                        variant="float"
                        theme="dark"
                        title="Premium Card"
                        desc="Special card with floating animation"
                        image="https://plus.unsplash.com/premium_photo-1691675469394-f843e044e340?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                }
                code={`"use client";
import { CardVariant } from "lumishade-ui";

export default function Card() {
    return (
        <>
            <CardVariant
                variant="float"
                theme="dark"
                title="Premium Card"
                desc="Special card with floating animation"
                image="https://i.pinimg.com/736x/ab/13/75/ab137557771bca5a60d8fcb2b44c47a0.jpg"
            />
        </>
    )
}
`}
            />
            <PropsTable 
                title="Card Props" 
                data={cardProps} 
                theme={theme}
            />
        </>
    )
}