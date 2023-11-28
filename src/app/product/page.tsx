import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {

    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(console.log("Resolvida")), 2000)
    });

    return (
        <>
            <Link href={'/'} > Home</Link>
            <p></p>
            <h1>Dashboard</h1>

            {/* <Suspense fallback={<><h1>Suspense API</h1></>}>
            </Suspense> */}
        </>
    );
}