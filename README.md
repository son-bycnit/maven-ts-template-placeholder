## Overview

This code will help you get the value from the pom file (Maven) and then replace it into the frontend files (run on node.js)

When you run the command `mvn package` it calls `npm run build-version ${version} ${release-date}` which gets the value of the `version` and `release-date` attribute

    <groupId>com.son</groupId>
    <artifactId>test</artifactId>
    <version>1.0-SNAPSHOT</version>
    <properties>
	    <release-date>24/06/2024</release-date>
    </properties>

`build-version` will execute the `build-version.js` file to replace the values ​​for the `default-layout.component.html` file