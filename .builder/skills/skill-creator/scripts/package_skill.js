#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import AdmZip from 'adm-zip';
import { validateSkill } from './quick_validate.js';

/**
 * Skill Packager - Creates a distributable .skill file of a skill folder
 * 
 * Usage:
 *     node package_skill.js <path/to/skill-folder> [output-directory]
 */

function packageSkill(skillPath, outputDir = null) {
    const skillPathResolved = path.resolve(skillPath);

    // Validate skill folder exists
    if (!fs.existsSync(skillPathResolved)) {
        console.error("❌ Error: Skill folder not found: " + skillPathResolved);
        return null;
    }

    if (!fs.statSync(skillPathResolved).isDirectory()) {
        console.error("❌ Error: Path is not a directory: " + skillPathResolved);
        return null;
    }

    // Validate SKILL.md exists
    const skillMd = path.join(skillPathResolved, 'SKILL.md');
    if (!fs.existsSync(skillMd)) {
        console.error("❌ Error: SKILL.md not found in " + skillPathResolved);
        return null;
    }

    // Run validation before packaging
    console.log("🔍 Validating skill...");
    const { valid, message } = validateSkill(skillPathResolved);
    if (!valid) {
        console.error("❌ Validation failed: " + message);
        console.error("   Please fix the validation errors before packaging.");
        return null;
    }
    console.log("✅ " + message + "\n");

    // Determine output location
    const skillName = path.basename(skillPathResolved);
    let outputPathResolved;
    if (outputDir) {
        outputPathResolved = path.resolve(outputDir);
        if (!fs.existsSync(outputPathResolved)) {
            fs.mkdirSync(outputPathResolved, { recursive: true });
        }
    } else {
        outputPathResolved = process.cwd();
    }

    const skillFilename = path.join(outputPathResolved, skillName + '.skill');

    // Create the .skill file (zip format)
    try {
        const zip = new AdmZip();
        
        // Walk through the skill directory
        // We want to include the folder itself in the zip, but relative to its parent
        // Wait, package_skill.py does: arcname = file_path.relative_to(skill_path.parent)
        // This means if we package "skills/my-skill", the zip contains "my-skill/..."
        
        const parentDir = path.dirname(skillPathResolved);
        
        function addFilesRecursive(currentPath) {
            const files = fs.readdirSync(currentPath);
            for (const file of files) {
                const fullPath = path.join(currentPath, file);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory()) {
                    addFilesRecursive(fullPath);
                } else {
                    const relativePath = path.relative(parentDir, fullPath);
                    zip.addLocalFile(fullPath, path.dirname(relativePath));
                    console.log("  Added: " + relativePath);
                }
            }
        }

        addFilesRecursive(skillPathResolved);
        
        zip.writeZip(skillFilename);

        console.log("\n✅ Successfully packaged skill to: " + skillFilename);
        return skillFilename;

    } catch (e) {
        console.error("❌ Error creating .skill file: " + e.message);
        return null;
    }
}

const args = process.argv.slice(2);
if (args.length < 1) {
    console.log('Usage: node package_skill.js <path/to/skill-folder> [output-directory]');
    console.log('\nExample:');
    console.log('  node package_skill.js skills/public/my-skill');
    console.log('  node package_skill.js skills/public/my-skill ./dist');
    process.exit(1);
}

const skillPath = args[0];
const outputDir = args[1] || null;

console.log("📦 Packaging skill: " + skillPath);
if (outputDir) {
    console.log("   Output directory: " + outputDir);
}
console.log();

const result = packageSkill(skillPath, outputDir);

if (result) {
    process.exit(0);
} else {
    process.exit(1);
}
