import JaHeader from "./JaHeader";
import Footer from "../../../components/Footer";
import { ReactNode } from 'react';


interface JaLayoutProps {
    child: ReactNode;
}

const JaLayout = ({ child }: JaLayoutProps) => {
    return (
        <>
            <JaHeader />
                <main>
                    { child }
                </main>
            <Footer />
        </>
    )
}

export default JaLayout;