import { Spinner } from "flowbite-react";

export const SpinnerComponent = () => {
    return (
        <div
            style={{
                height: "100vh",
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Spinner
                color="success"
                aria-label="Cargando elementos"
                size="lg"
            />
        </div>
    );
};
