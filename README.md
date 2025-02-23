# 🌐 AWS Static Website Deployment with CI/CD

## 📄 Project Overview
This project automates the deployment of a static website on AWS using a **Continuous Integration/Continuous Deployment (CI/CD) pipeline**. The setup leverages **AWS CodePipeline**, **Amazon S3**, and **AWS CloudFront** to ensure seamless updates and high availability.

## 🛠️ Key Features
- 🚀 **Automated Deployments** – Uses AWS CodePipeline for seamless code updates.
- 🔗 **Version Control Integration** – Syncs with GitHub for continuous delivery.
- ☁️ **Scalable Hosting** – Static site hosted on Amazon S3 with CloudFront for optimized performance.
- 🔒 **Security Best Practices** – Implements IAM roles and bucket policies to ensure secure access.

---

## 🔧 Deployment Instructions

### 📌 Prerequisites
- **AWS Account** – Ensure you have an AWS account with necessary permissions.
- **AWS CLI** – Installed and configured on your local machine.
- **GitHub Repository** – The static website source code should be hosted on GitHub.

### 🏗 Steps to Deploy
1. **Clone the Repository**
   ```sh
   git clone https://github.com/AmimaShifa/AWS-STATIC-WEBSITE-DEPLOYMENT.git
   cd AWS-STATIC-WEBSITE-DEPLOYMENT
   ```

2. **Deploy AWS Resources with CloudFormation**
   ```sh
   aws cloudformation create-stack --stack-name static-website-stack \
     --template-body file://cloudformation.yml --capabilities CAPABILITY_NAMED_IAM
   ```

3. **Set Up AWS CodePipeline**
   - Navigate to AWS CodePipeline and create a new pipeline.
   - Select **GitHub** as the source provider and connect your repository.
   - Use `buildspec.yml` for build commands.
   - Configure **Amazon S3** as the deployment destination.

4. **Trigger Deployment**
   - Push any updates to your GitHub repository.
   - The CI/CD pipeline will automatically deploy the latest changes.

---

## 🛡️ Security Considerations
- **IAM Policies** – Follow the principle of least privilege when setting up AWS roles.
- **S3 Bucket Policies** – Restrict public access except for necessary files.
- **CloudFront SSL/TLS** – Use **AWS Certificate Manager (ACM)** for HTTPS support.

## 📈 Monitoring & Logging
- **AWS CloudWatch** – Monitor pipeline execution and set up failure alerts.
- **S3 Access Logs** – Enable logging to track website access and traffic.

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

**🔹 Don't forget to ⭐ star the repository if you found it useful!** 🚀

