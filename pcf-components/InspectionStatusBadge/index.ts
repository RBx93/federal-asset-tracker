import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class InspectionStatusBadge implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container: HTMLDivElement;
    private badgeElement: HTMLDivElement;

    constructor() {
        // Empty
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.container = container;
        
        // Create the badge element
        this.badgeElement = document.createElement("div");
        this.badgeElement.className = "status-badge";
        this.container.appendChild(this.badgeElement);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Get the OptionSet value
        const resultValue = context.parameters.resultValue.raw;
        
        // Reset classes
        this.badgeElement.className = "status-badge";
        
        // Map values to display
        // Adjust these numbers to match your Choice values in Dataverse
        // Typically: 0 or 1 = first option, etc.
        let icon = "";
        let text = "";
        
        if (resultValue === 0 || resultValue === 756150000) {
            // Pass
            this.badgeElement.classList.add("status-pass");
            icon = "✓";
            text = "Pass";
        } else if (resultValue === 1 || resultValue === 756150001) {
            // Fail
            this.badgeElement.classList.add("status-fail");
            icon = "✗";
            text = "Fail";
        } else if (resultValue === 2 || resultValue === 756150002) {
            // Pending Review
            this.badgeElement.classList.add("status-pending");
            icon = "⏳";
            text = "Pending Review";
        } else {
            // Unknown/null
            text = "—";
        }
        
        this.badgeElement.innerHTML = `<span class="status-icon">${icon}</span>${text}`;
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Nothing to clean up
    }
}