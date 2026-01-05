"use client"

import ComponentSection from "./componentSection";
import ButtonVariant from "../components/button";
import { Search, RefreshCcw } from "lucide-react";

export default function ButtonSection () {
    return (
        <>
            <ComponentSection
                title="Default Button"
                preview={
                    <ButtonVariant
                        variant="default"
                        label="Submit"
                        onClick={() => alert("Data berhasil diirim!")}
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
        </>
    )
}