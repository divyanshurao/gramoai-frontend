import React, { useState } from "react";
import Navbar from "./../../components/navbar";
import { Button, Text } from "@mantine/core";
import { Input, Select } from "@mantine/core";
import LoadingPage from "./../../components/LoadingPage";
import toast, { Toaster } from "react-hot-toast";
const InputForm = () => {
    const [formValues, setFormValues] = useState({
        fullName: "",
        linkedinUrl: "",
        companyWebsite: "",
        productProblem: "",
        targetAudience: "",
        contentStyle: "",
        careerJourney: "",
        additionalInfo: ""
    });
    
    const [errors, setErrors] = useState({
        fullName: "",
        linkedinUrl: "",
        companyWebsite: "",
        productProblem: "",
        targetAudience: "",
        contentStyle: "",
        careerJourney: "",
        additionalInfo: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
        
        // Clear any error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const requiredFields = ['fullName', 'linkedinUrl', 'companyWebsite', 'productProblem', 'targetAudience', 'contentStyle', 'careerJourney'];
        const newErrors = { ...errors };
        let hasError = false;
        
        requiredFields.forEach(field => {
            if (!formValues[field as keyof typeof formValues]) {
                newErrors[field as keyof typeof errors] = "This field is required";
                hasError = true;
            }
        });
        
        if (hasError) {
            setErrors(newErrors);
            return;
        }
        
        setIsLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            console.log("Form submitted:", formValues);
            toast.success("Your content calendar has been generated.");

            setIsLoading(false);
        } catch (error) {
            console.error("Error submitting form:", error);
            
            // Show error message
            toast.error( "Failed to generate content calendar. Please try again.");
            
            // Reset loading state
            setIsLoading(false);
        }
    };

    // If loading, show loading page
    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />
            <div className="w-2/5 mx-auto px-4 pt-16 pb-20">
                <div className="bg-white shadow-md rounded-md border border-gray-200 p-8 mt-8">
                    <div className="mb-4">
                        <Text fw={400} className="mb-2">Share details about your profile:</Text>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div>
                                <Input.Label
                                    htmlFor="fullName"
                                    required
                                    className="text-left font-inter mb-1 block font-medium"
                                >
                                    Full Name
                                </Input.Label>
                                <textarea
                                id="fullName"
                                name="fullName"
                                placeholder=""
                                value={formValues.fullName}
                                onChange={handleChange}
                                rows={1}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.contentStyle ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                                {errors.fullName && (
                                    <span className="text-red-500 text-sm">{errors.fullName}</span>
                                )}
                            </div>
                            
                            <div>
                                <Input.Label
                                    htmlFor="linkedinUrl"
                                    className="text-left font-inter mb-1 block font-medium"
                                >
                                    LinkedIn URL
                                </Input.Label>
                                <textarea
                                id="linkedinUrl"
                                name="linkedinUrl"
                                placeholder=""
                                value={formValues.linkedinUrl}
                                onChange={handleChange}
                                rows={1}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.contentStyle ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                                {errors.linkedinUrl && (
                                    <span className="text-red-500 text-sm">{errors.linkedinUrl}</span>
                                )}
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div>
                                <Input.Label
                                    htmlFor="companyWebsite"
                                    className="text-left font-inter mb-1 block font-medium"
                                >
                                    Company Website
                                </Input.Label>
                                <textarea
                                id="companyWebsite"
                                name="companyWebsite"
                                placeholder=""
                                value={formValues.companyWebsite}
                                onChange={handleChange}
                                rows={1}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.contentStyle ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                                {errors.companyWebsite && (
                                    <span className="text-red-500 text-sm">{errors.companyWebsite}</span>
                                )}
                            </div>
                            
                            <div>
                                <Input.Label
                                    htmlFor="targetAudience"
                                    required
                                    className="text-left font-inter mb-1 block font-medium"
                                >
                                    Target Audience
                                </Input.Label>
                                <textarea
                                id="targetAudience"
                                name="targetAudience"
                                placeholder="e.g. Small business owners"
                                value={formValues.targetAudience}
                                onChange={handleChange}
                                rows={1}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.contentStyle ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                                {errors.targetAudience && (
                                    <span className="text-red-500 text-sm">{errors.targetAudience}</span>
                                )}
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <Input.Label
                                htmlFor="productProblem"
                                required
                                className="text-left font-inter mb-1 block font-medium"
                            >
                                What problem does your product/service solve?
                            </Input.Label>
                            <textarea
                                id="productProblem"
                                name="productProblem"
                                placeholder="Describe the problem your product solves"
                                value={formValues.productProblem}
                                onChange={handleChange}
                                rows={1}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.contentStyle ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                            
                            {errors.productProblem && (
                                <span className="text-red-500 text-sm">{errors.productProblem}</span>
                            )}
                        </div>
                        
                        <div className="mb-4">
                            <Input.Label
                                htmlFor="contentStyle"
                                required
                                className="text-left font-inter mb-1 block font-medium"
                            >
                                Share about your content style
                            </Input.Label>
                            <textarea
                                id="contentStyle"
                                name="contentStyle"
                                placeholder="e.g. casual tone, thought leadership posts"
                                value={formValues.contentStyle}
                                onChange={handleChange}
                                rows={1}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.contentStyle ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                            {errors.contentStyle && (
                                <span className="text-red-500 text-sm">{errors.contentStyle}</span>
                            )}
                        </div>
                        
                        <div className="mb-4">
                            <Input.Label
                                htmlFor="careerJourney"
                                required
                                className="text-left font-inter mb-1 block font-medium"
                            >
                                Share your career journey and key lessons learned
                            </Input.Label>
                            <textarea
                                id="careerJourney"
                                name="careerJourney"
                                placeholder="Describe your career path and important lessons"
                                value={formValues.careerJourney}
                                onChange={handleChange}
                                rows={3}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.careerJourney ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                            {errors.careerJourney && (
                                <span className="text-red-500 text-sm">{errors.careerJourney}</span>
                            )}
                        </div>
                        
                        <div className="mb-6">
                            <Input.Label
                                htmlFor="additionalInfo"
                                className="text-left font-inter mb-1 block font-medium"
                            >
                                Anything else we should take care of?
                            </Input.Label>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                placeholder=""
                                value={formValues.additionalInfo}
                                onChange={handleChange}
                                rows={1}
                                className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ${
                                    errors.contentStyle ? "border-red-500 focus:border-red-500" : ""
                                }`}
                            />
                            {errors.additionalInfo && (
                                <span className="text-red-500 text-sm">{errors.additionalInfo}</span>
                            )}
                        </div>
                        
                        <div className="flex justify-center">
                            <Button 
                                type="submit"
                                className="bg-[#121826] text-white px-8 py-2 rounded-md"
                                disabled={isLoading}
                            >
                                Generate Content Calendar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputForm;