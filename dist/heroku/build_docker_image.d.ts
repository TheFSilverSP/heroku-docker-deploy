export declare const buildDockerImage: ({ dockerfileName, dockerOptions, herokuAppName, presearchPrivateKey, presearchPublicKey, cwd, processType, }: {
    dockerfileName: string;
    dockerOptions: string;
    herokuAppName: string;
    presearchPrivateKey: string;
    presearchPublicKey: string;
    cwd: string;
    processType: string;
}) => Promise<boolean>;
