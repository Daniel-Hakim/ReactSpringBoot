pipeline {

agent any
 tools {
        maven 'Apache Maven 3.8.5'
    }
stages {
    stage('Compile Stage') {

	    steps {

		bat 'mvn clean compile'

		      }
		}

	 stage('Testing Stage') {

	    steps {

    		bat 'mvn test'

    		      }
    		}


	 stage('Deployment Stage') {

    	    steps {

        		bat 'mvn deploy'

        		      }
        		}

     }
}