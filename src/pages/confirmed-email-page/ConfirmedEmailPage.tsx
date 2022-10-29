import ConfirmedEmailCard from "../../components/confirmed-email-page/ConfirmedEmailCard";
import { useEffect, useState } from "react";
import { authApi } from "../../common/api/authApi";
import { useQuery } from "../../common/utils/routeUtils";
import { ConfirmationStatus } from "./utils/confirmationStatus";

const ConfirmedEmailPage = () => {
    const token = useQuery().get("token") as string;
    const email = useQuery().get("email") as string;
    const [status, setStatus] = useState(ConfirmationStatus.Verifying);

    useEffect(() => {
        authApi
            .confirmEmail({ token, email })
            .then(() => setStatus(ConfirmationStatus.Success))
            .catch((error) => {
                console.log(error);
                setStatus(ConfirmationStatus.Failed);
            });
    });

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ConfirmedEmailCard status={status} email={email} />
        </div>
    );
};

export default ConfirmedEmailPage;
