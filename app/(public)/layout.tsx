import PublicMainLayout from "@/components/layout/public/mainLayout";
import { ReactNode } from "react";


function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <PublicMainLayout>
                {children}
            </PublicMainLayout >
        </div>
    );
}

export default PublicLayout;