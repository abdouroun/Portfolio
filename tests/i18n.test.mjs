import test from 'node:test';
import assert from 'node:assert/strict';
import english from '../src/i18n/en.json' with { type: 'json' };
import french from '../src/i18n/fr.json' with { type: 'json' };
import { translate } from '../src/i18n/translate.ts';

test('English and French catalogs have matching stable keys and placeholders', () => {
    assert.deepEqual(Object.keys(english).sort(), Object.keys(french).sort());
    for (const key of Object.keys(english)) {
        assert.match(key, /^[a-zA-Z]+\.[a-zA-Z0-9]+$/);
        assert.ok(french[key].trim(), key);
        assert.deepEqual(english[key].match(/\{\w+\}/g), french[key].match(/\{\w+\}/g));
    }
});

test('The same key resolves both language catalogs', () => {
    assert.equal(translate('header.work', 'en'), 'Work');
    assert.equal(translate('header.work', 'fr'), 'Réalisations');
    assert.equal(translate('developerScene.understand', 'fr'), 'Comprendre');
});

test('Every catalog value preserves inline spacing and resolves without leaking a key', () => {
    for (const key of Object.keys(english)) {
        assert.equal(translate(key, 'en'), english[key]);
        assert.equal(translate(key, 'fr'), french[key]);
        assert.equal(english[key].match(/^\s*/)[0], french[key].match(/^\s*/)[0]);
        assert.equal(english[key].match(/\s*$/)[0], french[key].match(/\s*$/)[0]);
    }
});

test('External-link labels interpolate their destination as text', () => {
    const key = Object.keys(english).find(key => english[key].includes('{site}'));
    assert.equal(translate(key, 'fr', { site: 'tamtam.pro' }),
        'Visiter tamtam.pro (s’ouvre dans un nouvel onglet)');
});
