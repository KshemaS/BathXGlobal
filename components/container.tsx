

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container: React.FC<ContainerProps> = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={`w-full px-[16px] sm:px-[24px] md:px-0 md:max-w-[92%] 2xl:max-w-[calc(1536px-144px)] 3xl:max-w-[calc(1600px-154px)] 4xl:max-w-[calc(1920px-80px)] mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export default Container;
