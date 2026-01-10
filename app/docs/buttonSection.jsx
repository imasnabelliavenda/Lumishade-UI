"use client"

import ComponentSection from "./componentSection";
import ButtonVariant from "../components/button";
import { Search, RefreshCcw } from "lucide-react";
import PropsTable from "./propsTable";
import { useTheme } from "../context/themeContext";
import { buttons } from "../tokens/themes";

export default function ButtonSection () {
    const { theme } = useTheme();

    const buttonProps = [
        {
            name: "variant",
            meta: "(Required)",
            description: "Tentukan jenis button yang akan dipakai. Tersedia: default | icon | rotate | slide",
        },
        {
            name: "label",
            meta: "(Required)",
            description: "Teks yang ditampilkan pada button",
        },
        {
            name: "icon",
            meta: "(Optional)",
            description: "Icon untuk variant icon / rotate",
        },
        {
            name: "onClick",
            meta: "(Optional)",
            description: "Dipanggil saat button diklik",
        },
        {
            name: "theme",
            meta: "(Required)",
            description: "Tema warna button",
            colors: [
                { name: "light", value: buttons.light.background },
                { name: "dark", value: buttons.dark.background },
            ],
        },
    ];


    return (
        <>
            <ComponentSection
                title="Default Button"
                preview={
                    <ButtonVariant
                        variant="default"
                        label="Submit"
                        onClick={() => alert("Data berhasil dikirim!")}
                    />
                }
                code={`"use client";
import { ButtonVariant } from "lumishade-ui";

export default function Button() {
    return (
        <>
            <ButtonVariant
                variant="default"
                label="Submit"
                onClick={() => alert("Data berhasil diirim!")}
            />
        </>
    )
}
`}
            />

            <ComponentSection
                title="Button With Icon"
                preview={
                    <ButtonVariant 
                        variant="icon" 
                        theme="dark" 
                        label="Search" 
                        icon={<Search />} 
                    />
                }
                code={`"use client";
import { ButtonVariant } from "lumishade-ui";
import { Search } from "lucide-react";

export default function Button() {
    return (
        <>
            <ButtonVariant 
                variant="icon" 
                theme="dark" 
                label="Search" 
                icon={<Search />} 
            />
        </>
    )
}
`}
                />
                
                <ComponentSection
                    title="Button Animation (Rotate)"
                    preview={
                        <ButtonVariant 
                            variant="rotate" 
                            theme="light" 
                            label="Refresh" 
                            icon={<RefreshCcw />} 
                        />
                    }
                    code={`"use client";
import { ButtonVariant } from "lumishade-ui";
import { RefreshCcw } from "lucide-react";

export default function Button() {
    return (
        <>
            <ButtonVariant 
                variant="rotate" 
                theme="light" 
                label="Refresh" 
                icon={<RefreshCcw />} 
            />
        </>
    )
}
`}
            />

            <PropsTable 
                title="Button Props" 
                data={buttonProps} 
                theme={theme}
            />
        </>
    )
}