    agent any

    tools {
        nodejs "NodeJS"
        git "Default"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
            post {
                success {
                    echo 'Dependencies installed successfully!'
                }
                failure {
                    echo 'Failed to install dependencies!'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    bat 'npm test'
                }
            }
            post {
                success {
                    echo 'Tests passed successfully!'
                }
                failure {
                    echo 'Tests failed!'
                    currentBuild.result = 'FAILURE'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
            post {
                success {
                    echo 'Build successful!'
                }
                failure {
                    echo 'Build failed!'
                    currentBuild.result = 'FAILURE'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    bat 'npm run start -- -p 3000'
                }
            }
            post {
                success {
                    echo 'Deployment successful!'
                }
                failure {
                    echo 'Deployment failed!'
                    currentBuild.result = 'FAILURE'
                }
            }
        }
    }

    post {
        always {
            echo 'Build and deployment completed!'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
