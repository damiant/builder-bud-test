#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Quick validation script for skills - minimal version
 */

export function validateSkill(skillPath) {
    const skillPathResolved = path.resolve(skillPath);

    // Check SKILL.md exists
    const skillMdPath = path.join(skillPathResolved, 'SKILL.md');
    if (!fs.existsSync(skillMdPath)) {
        return { valid: false, message: 'SKILL.md not found' };
    }

    // Read and validate frontmatter
    const content = fs.readFileSync(skillMdPath, 'utf8');
    if (!content.startsWith('---')) {
        return { valid: false, message: 'No YAML frontmatter found' };
    }

    // Extract frontmatter
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) {
        return { valid: false, message: 'Invalid frontmatter format' };
    }

    const frontmatterText = match[1];

    // Parse YAML frontmatter
    let frontmatter;
    try {
        frontmatter = yaml.load(frontmatterText);
        if (typeof frontmatter !== 'object' || frontmatter === null || Array.isArray(frontmatter)) {
            return { valid: false, message: 'Frontmatter must be a YAML dictionary' };
        }
    } catch (e) {
        return { valid: false, message: 'Invalid YAML in frontmatter: ' + e.message };
    }

    // Define allowed properties
    const ALLOWED_PROPERTIES = new Set(['name', 'description', 'license', 'allowed-tools', 'metadata']);

    // Check for unexpected properties
    const unexpectedKeys = Object.keys(frontmatter).filter(key => !ALLOWED_PROPERTIES.has(key));
    if (unexpectedKeys.length > 0) {
        return {
            valid: false,
            message: 'Unexpected key(s) in SKILL.md frontmatter: ' + unexpectedKeys.sort().join(', ') + '. ' +
                     'Allowed properties are: ' + Array.from(ALLOWED_PROPERTIES).sort().join(', ')
        };
    }

    // Check required fields
    if (!('name' in frontmatter)) {
        return { valid: false, message: "Missing 'name' in frontmatter" };
    }
    if (!('description' in frontmatter)) {
        return { valid: false, message: "Missing 'description' in frontmatter" };
    }

    // Extract name for validation
    let name = frontmatter.name || '';
    if (typeof name !== 'string') {
        return { valid: false, message: 'Name must be a string, got ' + typeof name };
    }
    name = name.trim();
    if (name) {
        // Check naming convention (hyphen-case: lowercase with hyphens)
        if (!/^[a-z0-9-]+$/.test(name)) {
            return { valid: false, message: "Name '" + name + "' should be hyphen-case (lowercase letters, digits, and hyphens only)" };
        }
        if (name.startsWith('-') || name.endsWith('-') || name.includes('--')) {
            return { valid: false, message: "Name '" + name + "' cannot start/end with hyphen or contain consecutive hyphens" };
        }
        // Check name length
        if (name.length > 64) {
            return { valid: false, message: 'Name is too long (' + name.length + ' characters). Maximum is 64 characters.' };
        }
    }

    // Extract and validate description
    let description = frontmatter.description || '';
    if (typeof description !== 'string') {
        return { valid: false, message: 'Description must be a string, got ' + typeof description };
    }
    description = description.trim();
    if (description) {
        // Check for angle brackets
        if (description.includes('<') || description.includes('>')) {
            return { valid: false, message: 'Description cannot contain angle brackets (< or >)' };
        }
        // Check description length
        if (description.length > 1024) {
            return { valid: false, message: 'Description is too long (' + description.length + ' characters). Maximum is 1024 characters.' };
        }
    }

    return { valid: true, message: 'Skill is valid!' };
}

// Check if this script is being run directly
import { fileURLToPath } from 'url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    if (process.argv.length !== 3) {
        console.log('Usage: node quick_validate.js <skill_directory>');
        process.exit(1);
    }

    const { valid, message } = validateSkill(process.argv[2]);
    console.log(message);
    process.exit(valid ? 0 : 1);
}
