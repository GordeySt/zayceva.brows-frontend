import { ClassNameMap } from "@mui/material";
import ConfirmVerifyingInfo from "./ConfirmVerifyingInfo";
import ConfirmSuccessInfo from "./ConfirmSuccessInfo";
import ConfirmFailInfo from "./ConfirmFailInfo";
import { ConfirmationStatus } from "../../pages/confirmed-email-page/utils/confirmationStatus";

interface IProps {
    status: ConfirmationStatus;
    t: any;
    classes: ClassNameMap<"cardTitle" | "cardMainInfo">;
    email: string;
}

const ConfirmedEmailCardInfo = ({ status, t, classes, email }: IProps) => {
    switch (status) {
        case ConfirmationStatus.Verifying:
            return <ConfirmVerifyingInfo />;
        case ConfirmationStatus.Success:
            return <ConfirmSuccessInfo t={t} classes={classes} />;
        case ConfirmationStatus.Failed:
            return <ConfirmFailInfo t={t} classes={classes} email={email} />;
    }
};

export default ConfirmedEmailCardInfo;