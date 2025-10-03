declare const ProfileCard: {
    ({ name, title, handle, status, contactText, avatarUrl, showUserInfo, enableTilt, enableMobileTilt, onContactClick, }: {
        name: any;
        title: any;
        handle: any;
        status: any;
        contactText: any;
        avatarUrl: any;
        showUserInfo: any;
        enableTilt: any;
        enableMobileTilt: any;
        onContactClick: any;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        name: any;
        title: any;
        handle: any;
        status: any;
        contactText: any;
        avatarUrl: any;
        showUserInfo: any;
        enableTilt: any;
        enableMobileTilt: any;
        onContactClick: any;
    };
    defaultProps: {
        showUserInfo: boolean;
        enableTilt: boolean;
        enableMobileTilt: boolean;
        onContactClick: () => void;
    };
};
export default ProfileCard;
