interface ShippingInfo {
    name: string;
    address: string;
}

interface DemoConstantContract {
    specificField: string;
    commonField: string;
    nestedField: ShippingInfo;
    readonly randomLanguageName: string;

    printLanguageName(): void; // method
}
